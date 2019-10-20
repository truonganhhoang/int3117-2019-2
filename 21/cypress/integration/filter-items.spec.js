import {classStates, filterLabels, dataFiles} from './constant';

classStates.forEach((classState, index) => {
	describe(`Class filtering with state: '${classState}'`, () => {
		before(() => {
			cy.visitAndSignIn();
		});
		beforeEach(() => {
			cy.server();
			cy.route({
				url: 'https://cauhoi-api.sachmem.vn/api/classes?filter=active',
				method: 'get',
				response: 'fixture:active'
			});
			cy.route({
				url: 'https://cauhoi-api.sachmem.vn/api/classes?filter=all',
				method: 'get',
				response: 'fixture:all'
			});
			cy.route({
				url: 'https://cauhoi-api.sachmem.vn/api/classes?filter=inactive',
				method: 'get',
				response: 'fixture:inactive'
			});
			cy.get('.ng-select-filter-book')
				.last()
				.click()
				.find('.ng-dropdown-panel')
				.contains(classState)
				.click();
		});

		context(`Class filtering with state: '${classState}'`, () => {
			it('displays no extra filtering', () => {
				cy.get('.ng-select-filter-book')
					.first()
					.find('.ng-value')
					.should('not.exist')
			});

			it("displays items with no extra filtering", () => {
				cy.fixture(dataFiles[index])
					.then(({data}) => {
						cy.get('.list-group li')
							.should('have.length', data.childNodes.length)
					})
			});

			it('displays "Sinh" filtering', () => {
				cy.get('.ng-select-filter-book')
					.first()
					.as('filter')
					.click()
					.find('.ng-dropdown-panel')
					.contains(filterLabels[0])
					.as('label')
					.click();

				cy.get('@filter')
					.find('.ng-value')
					.should('contain', filterLabels[0]);

				cy.get('@filter')
					.click()
					.find('.ng-dropdown-panel')
					.contains(filterLabels[0])
					.click();
			});

			it('displays items with "Sinh" filtering', () => {
				cy.get('.ng-select-filter-book')
					.first()
					.as('filter')
					.click()
					.find('.ng-dropdown-panel')
					.contains(filterLabels[0])
					.click();

				cy.fixture(dataFiles[index])
					.then(({data}) => {
						cy.get('.list-group li')
							.should('have.length',
								data.childNodes.filter(node => node.tags.includes(filterLabels[0])).length);

						cy.get('@filter')
							.click()
							.find('.ng-dropdown-panel')
							.contains(filterLabels[0])
							.click();
					})
			});

			it('displays "Sinh + Toán" filtering', () => {
				cy.get('.ng-select-filter-book')
					.first()
					.as('filter')
					.click()
					.find('.ng-dropdown-panel')
					.as('label');

				cy.get('@label')
					.contains(filterLabels[0])
					.click();

				cy.get('@filter')
					.click()
					.find('.ng-dropdown-panel')
					.contains(filterLabels[1])
					.click();

				cy.get('@filter')
					.find('.ng-value')
					.each((_, index) => {
						cy.get('@filter')
							.should('contain', filterLabels[index])
					});

				cy.get('@filter')
					.find('.ng-clear-wrapper')
					.click();
			});

			it('displays items with "Sinh + Toán" filtering', () => {
				cy.get('.ng-select-filter-book')
					.first()
					.as('filter')
					.click()
					.find('.ng-dropdown-panel')
					.as('label');

				cy.get('@label')
					.contains(filterLabels[0])
					.click();

				cy.get('@filter')
					.click()
					.find('.ng-dropdown-panel')
					.contains(filterLabels[1])
					.click();

				cy.fixture(dataFiles[index])
					.then(({data}) => {
						cy.get('.list-group li')
							.should('have.length',
								data.childNodes.filter(node => node.tags.includes(filterLabels[0]) ||
									node.tags.includes(filterLabels[1])).length);

						cy.get('@filter')
							.find('.ng-clear-wrapper')
							.click();
					})
			});
		});
	});
});
