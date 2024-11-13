export class Todo {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public isPrivate: boolean,
		public isCompleted: boolean,
		public userId: string,
	) {}

	toggleIsPrivate(): void {
		this.isPrivate = !this.isPrivate;
	}

	toggleCompletion(): void {
		this.isCompleted = !this.isCompleted;
	}
}
