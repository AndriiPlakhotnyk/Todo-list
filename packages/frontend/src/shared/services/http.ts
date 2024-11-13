import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
	private api: AxiosInstance;

	constructor(baseURL: string = process.env.REACT_APP_API_URL) {
		this.api = axios.create({
			baseURL,
		});
	}

	private handleResponse<T>(response: AxiosResponse<T>): T {
		return response.data;
	}

	private handleError(error: unknown): never {
		if (axios.isAxiosError(error)) {
			console.error('HTTP error', error.message);
			throw error;
		}

		console.error('HTTP error', error);
		throw new Error('Something went wrong');
	}

	async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		try {
			const response = await this.api.get<T>(url, config);
			return this.handleResponse(response);
		} catch (error) {
			this.handleError(error);
		}
	}

	async post<T, D = unknown>(
		url: string,
		data: D,
		config?: AxiosRequestConfig,
	): Promise<T> {
		try {
			const response = await this.api.post<T>(url, data, config);
			return this.handleResponse(response);
		} catch (error) {
			this.handleError(error);
		}
	}

	async put<T, D = unknown>(
		url: string,
		data: D,
		config?: AxiosRequestConfig,
	): Promise<T> {
		try {
			const response = await this.api.put<T>(url, data, config);
			return this.handleResponse(response);
		} catch (error) {
			this.handleError(error);
		}
	}

	async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		try {
			const response = await this.api.delete<T>(url, config);
			return this.handleResponse(response);
		} catch (error) {
			this.handleError(error);
		}
	}
}

export default HttpService;
