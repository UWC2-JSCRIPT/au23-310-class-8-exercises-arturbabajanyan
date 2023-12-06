describe('Test for the blackjack game', () => {
    it('Checks if the dealer should draw works', () => {
        const dealerHandCheck1 = [
            { displayVal: "ten", val: 10, suit: "diamonds"},
            { displayVal: "nine", val: 9, suit: "spades"},
        ];
        const dealerHandCheck2 = [
            { displayVal: "Ace", val: 11, suit: "clubs"},
            { displayVal: "six", val: 6, suit: "spades"},
        ];
        const dealerHandCheck3 = [
            { displayVal: "ten", val: 10, suit: "diamonds"},
            { displayVal: "six", val: 6, suit: "spades"},
            { displayVal: "Ace", val: 11, suit: "hearts"},
        ];
        const dealerHandCheck4 = [
            { displayVal: "two", val: 2, suit: "hearts"},
            { displayVal: "four", val: 4, suit: "spades"},
            { displayVal: "two", val: 2, suit: "clubs"},
            { displayVal: "five", val: 5, suit: "diamonds"},
        ];

        const handScore1 = dealerShouldDraw(dealerHandCheck1);
        expect(handScore1).toEqual(false);

        const handScore2 = dealerShouldDraw(dealerHandCheck2);
        expect(handScore2).toEqual(true);

        const handScore3 = dealerShouldDraw(dealerHandCheck3);
        expect(handScore3).toEqual(false);

        const handScore4 = dealerShouldDraw(dealerHandCheck4);
        expect(handScore4).toEqual(true);
    })
})