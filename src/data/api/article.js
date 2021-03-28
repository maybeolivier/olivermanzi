import axios from "axios";
import { config } from "../../helpers/token-helper";

export let postArticle = async (token, userId, title, content, tags) => {
	let data = { title: title, content: content, tags: tags };

	try {
		let response = await axios.post(`/users/${userId}/articles`, data, config(token));
		if (response.status == 201) {
			return response;
		} else {
			throw response;
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export let getAllArticles = async () => {
	try {
		let response = await axios.get("/articles");
		if (response.status == 200) {
			return response;
		} else {
			throw response;
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export let getSingleArticle = async (id) => {
	try {
		let response = await axios.get(`/articles/${id}`);
		if (response.status == 200) {
			return response;
		} else {
			throw response;
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export let getUserArticles = async (id) => {
	try {
		let response = await axios.get(`/users/${id}/articles`);
		if (response.status == 200) {
			return response;
		} else {
			throw response;
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export let patchArticle = async (token, id, patch) => {
	try {
		let response = await axios.patch(`/articles/${id}`, patch, config(token));
		if (response.status == 200) {
			return response;
		} else {
			throw response;
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export let deleteArticle = async (token, id) => {
	try {
		let response = await axios.delete(`/articles/${id}`, config(token));
		if (response.status == 203) {
			return response;
		} else {
			throw response;
		}
	} catch (error) {
		return Promise.reject(error);
	}
};
