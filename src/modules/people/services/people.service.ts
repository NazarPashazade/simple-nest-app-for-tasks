import { Injectable } from '@nestjs/common';

@Injectable()
export class PeopleService {
  private readonly companies = [
    { id: 1, name: 'Company_1' },
    { id: 2, name: 'Company_2' },
    { id: 3, name: 'Company_3' },
    { id: 4, name: 'Company_4' },
    { id: 5, name: 'Company_5' },
    { id: 6, name: 'Company_6' },
  ];

  private readonly people = [
    { id: 1, name: 'Person_1', employedAtId: 3 },
    { id: 2, name: 'Person_2', employedAtId: 3 },
    { id: 3, name: 'Person_3', employedAtId: 1 },
    { id: 4, name: 'Person_4', employedAtId: null },
    { id: 5, name: 'Person_5', employedAtId: 4 },
    { id: 6, name: 'Person_6', employedAtId: null },
    { id: 7, name: 'Person_7', employedAtId: 1 },
  ];

  getEmployedPeople() {
    const companyMap = new Map(
      this.companies.map((company) => [company.id, company.name]),
    );

    const employedPeople = this.people
      .filter(
        (person) => person.employedAtId && companyMap.has(person.employedAtId),
      )
      .map((person) => ({
        name: person.name,
        employedAt: companyMap.get(person.employedAtId),
      }));

    employedPeople.sort((a, b) => a.employedAt.localeCompare(b.employedAt));

    return employedPeople;
  }
}
