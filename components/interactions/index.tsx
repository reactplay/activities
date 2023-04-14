import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuthenticationStatus, useUserData } from '@nhost/nextjs';
import { TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { FiThumbsUp } from 'react-icons/fi';

import styles from '@/styles/idea.module.css';
import { NHOST } from '@/services/nhost';
import { PrimaryButton, SecondaryOutlinedButton } from '../Buttons';
import { insert_comment, like_idea } from '@/services/graphql/interactions';
import { time_since } from '@/services/util/time';
import { escape_new_line, unescape_new_line } from '@/services/util/string';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Interaction = ({ data, doRefresh }) => {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();
    const [loading, setLoading] = useState();
    const userData = useUserData();
    const [commentText, setCommentText] = useState();
    const [isLiked, setIsLiked] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    useEffect(() => {
        if (userData) {
            const filter_user = data.idea_like_map.filter((lm) => lm.user_id === userData.id)[0];
            if (filter_user) {
                setIsLiked(true);
            }
        }
    }, [userData, data]);
    const onCommentSubmit = () => {
        setLoading(true);
        insert_comment(escape_new_line(commentText), data.id, userData.id).then((res) => {
            setLoading(false);
            setAlertMsg('Successfully posted your comment');
            setAlertOpen(true);
            setCommentText('');
            if (doRefresh) {
                doRefresh();
            }
        });
    };

    const onLikeClicked = () => {
        setLoading(true);
        like_idea(data.id, userData.id)
            .then((res) => {
                setLoading(false);
                setAlertMsg('You liked this idea');
                setAlertOpen(true);
                if (doRefresh) {
                    doRefresh();
                }
            })
            .catch((err) => {
                // Do nothing
                if (doRefresh) {
                    doRefresh();
                }
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertOpen(false);
    };

    const onAuthenticate = () => {
        if (typeof window !== 'undefined') {
            const protocol = process.env.NEXT_PUBLIC_PROTOCOL
                ? process.env.NEXT_PUBLIC_PROTOCOL
                : 'https';
            const host = window.location.hostname;
            const port = process.env.NEXT_PUBLIC_DEV_PORT
                ? `:${process.env.NEXT_PUBLIC_DEV_PORT}`
                : '';
            const external_path = NHOST.AUTH_URL(
                `${protocol}://${host}${port}/hackrplay/2022/ideas/${data.id}`
            );
            window.location = external_path;
        }
    };

    if (isLoading) {
        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <h5 className={styles.title}>
                        Loading authentication information. Please wait.
                    </h5>
                </main>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full">
            <div className="py-4 flex">
                <div className="text-white text-xl px-4 flex-1 text-brand-title">
                    {data.idea_comments_map.length} COMMENT(S)
                </div>
                <div>
                    {isAuthenticated ? (
                        <>
                            {isLiked ? (
                                <div className="flex  text-md justify-center items-center text-brand-muted px-4">
                                    <FiThumbsUp className="mr-2 my-auto" size={20} />
                                    LIKED
                                </div>
                            ) : (
                                <SecondaryOutlinedButton
                                    handleOnClick={() => onLikeClicked()}
                                    className="flex px-4 justify-center items-center text-white text-xl"
                                >
                                    Like It
                                </SecondaryOutlinedButton>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
            <div className="py-8">
                {data.idea_comments_map.length === 0 ? (
                    <div className="h-10 text-[#ffffff99] flex justify-center items-center rounded-md border-2 border-sky-400">
                        NO COMMENTS HAS BEEN ADDED
                    </div>
                ) : (
                    <div>
                        {data.idea_comments_map.map((comment, ci) => {
                            return (
                                <div className="px-4 py-2" key={ci}>
                                    <div className="flex flex-col border-2 border-[#ffffff29] p-4">
                                        <div className="flex">
                                            <div className="flex justify-center items-center px-4 pl-8">
                                                <Image
                                                    className="rounded-full"
                                                    height={40}
                                                    width={40}
                                                    layout={'fixed'}
                                                    src={comment.idea_comment_user_map.avatarUrl}
                                                    alt={'user avatar'}
                                                    aria-label="user avatar"
                                                />
                                            </div>
                                            <div className="text-white flex-1 flex  items-center">
                                                {comment.idea_comment_user_map.displayName}
                                            </div>
                                            <div className="text-[#ffffff99] text-sm">
                                                {time_since(new Date(comment.date))} ago
                                            </div>
                                        </div>
                                        <div className=" px-8 text-[#ffffff99] py-4 whitespace-pre-wrap">
                                            {unescape_new_line(comment.comment)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div>
                {isAuthenticated ? (
                    <div className="flex flex-col p-4">
                        <div className="flex">
                            <div>
                                <div className="flex flex-col px-8">
                                    <div className="flex justify-center items-center">
                                        <Image
                                            className="rounded-full"
                                            height={40}
                                            width={40}
                                            layout={'fixed'}
                                            src={userData.avatarUrl}
                                            alt={'user avatar'}
                                            aria-label="user avatar"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center text-1xl text-white">
                                        {userData.displayName}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`flex-1 ${styles['arrow-box']} ${styles['arrow-left']} `}
                            >
                                <TextField
                                    multiline
                                    rows={2}
                                    placeholder="Share your thought"
                                    className="w-full"
                                    onChange={(v) => setCommentText(v.target.value)}
                                    value={commentText}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end py-3">
                            <PrimaryButton
                                disabled={!commentText || commentText.trim() === ''}
                                handleOnClick={() => onCommentSubmit()}
                            >
                                Comment
                            </PrimaryButton>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => onAuthenticate()}
                        className="w-full h-10 text-[#ffffff99] flex justify-center items-center rounded-md border-2 border-sky-400"
                    >
                        You need to login to comment or like ideas
                    </button>
                )}
            </div>
            <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    {alertMsg}
                </Alert>
            </Snackbar>
        </div>
    );
};
export default Interaction;
