import { submit } from '@/services/request';
import * as _ from 'lodash';

export const list_statuses = () => {
	const input_obj = {
		display: 'List Ideas',
		name: 'Hackathon_Status',
		function: 'hackathon_status',
		return: ['label', 'id'],
	};
	return submit(input_obj);
};

export const insert_ideas_status = (idea_object) => {
	const insert_obj = {
		display: 'Insert Idea Status',
		name: 'Insert_Hackathon_Idea_Status_one',
		function: 'insert_hackathon_idea_status_one',
		write: true,
		object: {
			idea_id: idea_object.id,
			status_id: idea_object.status,
		},
		return: ['id'],
	};

	return submit(insert_obj);
};

export const update_ideas_status = (data) => {
	console.log(data)
}
export const get_latest_status = (idea) => {
	const all_statuses = [];

	idea.idea_idea_status_map.forEach((st) => {
		all_statuses.push(st.idea_status_status_map);
	});
	const last_status = all_statuses[all_statuses.length - 1];
	return last_status;
};

export const get_idea_submission_info = (id) => {
	const input_obj = {
		display: 'List Ideas',
		name: 'Hackathon_Idea_submission',
		function: 'hackathon_idea_submission',
		where: {
			clause: {
				operator: 'and',
				conditions: [
					{
						field: 'idea_id',
						operator: 'eq',
						value: id,
					},
				],
			},
		},
		return: ['application', 'blog_url', 'comment', 'repository_url'],
	};
	return submit(input_obj);
};
