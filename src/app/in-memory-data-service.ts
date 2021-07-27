import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb(){
		const aboutme = [
			{ id: 1,
				name: 'Chigurupalli Gangadhar',
				college:'B.tech In Computer Science & Engineering',
				email: 'gangadhar.qlik@gmail.com',
				Number: '8520906413',
				location: 'Hyderabad'
		 },
			
		];
		return {aboutme};
	}
}