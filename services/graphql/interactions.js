import { submit } from '@/services/request';
import * as _ from 'lodash';

export const insert_comment = (comment, idea_id, current_user) => {
	const input_obj = {
		display: 'Insert Comment',
		name: 'Insert_Hackathon_Idea_Comments_One',
		function: 'insert_hackathon_idea_comments_one',
		write: true,
		object: {
			hackathon_id: process.env.NEXT_PUBLIC_HACKATHON_ID,
			comment: comment,
			idea_id: idea_id,
			user_id: current_user,
		},
		return: ['id'],
	};

	return submit(input_obj);
};

export const like_idea = (idea_id, current_user) => {
	const input_obj = {
		display: 'Insert Comment',
		name: 'Insert_Hackathon_Idea_Likes_One',
		function: 'insert_hackathon_idea_likes_one',
		write: true,
		object: {
			hackathon_id: process.env.NEXT_PUBLIC_HACKATHON_ID,
			idea_id: idea_id,
			user_id: current_user,
		},
		return: ['id'],
	};

	return submit(input_obj);
};
