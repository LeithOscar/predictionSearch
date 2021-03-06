import { BoyerMoorePatternService } from './boyerMoore.service';


describe('boyerMoorePatternService', () => {

    let service: BoyerMoorePatternService = null;

    beforeEach(() => {

        service = new BoyerMoorePatternService();
    });


    describe('Applying different pattern of Boyyer Moore', () => {

        describe('findbruteForce', () => {

            it('find ostente on text', () => {
                const searchText = 'ostente';
                const text = 'la vecina ostente';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });
            it('find test on text', () => {
                const searchText = 'test';
                const text = 'this is a test';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });

            it('find text on text', () => {
                const searchText = 'text';
                const text = 'alltexttogether';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });

            it('find Visa on text', () => {
                const searchText = 'Visa';
                const text = 'paywithVisa';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });

            it('find 97 on text', () => {
                const searchText = '97';
                const text = 'nº64986xxx - num97';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });

            it('find Ñ on text', () => {
                const searchText = 'Ñ';
                const text = 'nº6498Ñ6xxx - num97';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });

            it('find 99$ on text', () => {
                const searchText = '99$';
                const text = 'pay 9.099$';
                const exist = service.bruteForce(text, searchText);

                expect(exist).toBe(1);
            });


        });

        describe('badMatchTable', () => {
            it('find test on text', () => {
                const searchText = 'test';
                const text = 'this is a test';
                const exist = service.badMatchTable(text, searchText);

                expect(exist).toBe(1);
            });

            it('find text on text', () => {
                const searchText = 'text';
                const text = 'alltexttogether';
                const exist = service.badMatchTable(text, searchText);

                expect(exist).toBe(1);
            });

            it('find Visa on text', () => {
                const searchText = 'Visa';
                const text = 'paywithVisa';
                const exist = service.badMatchTable(text, searchText);

                expect(exist).toBe(1);
            });

            it('find 97 on text', () => {
                const searchText = '97';
                const text = 'nº64986xxx - num97';
                const exist = service.badMatchTable(text, searchText);

                expect(exist).toBe(1);
            });

            it('find Ñ on text', () => {
                const searchText = 'Ñ';
                const text = 'nº6498Ñ6xxx - num97';
                const exist = service.badMatchTable(text, searchText);

                expect(exist).toBe(1);
            });

            it('find 99$ on text', () => {
                const searchText = '99$';
                const text = 'pay 9.099$';
                const exist = service.badMatchTable(text, searchText);

                expect(exist).toBe(1);
            });
        });
    });
});
