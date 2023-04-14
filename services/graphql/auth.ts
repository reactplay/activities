import { submit } from '@/services/request';
import * as _ from 'lodash';

export const getAllUsers = () => {
    return submit({
        display: 'All Users',
        name: 'Users',
        function: 'users',
        return: ['avatarUrl', 'displayName', 'id']
    }).then((res) => {
        return _.orderBy(res, ['displayName'], ['asc']);
    });
};
