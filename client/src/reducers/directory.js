const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl:
                "https://images.unsplash.com/photo-1561578428-c50f678e6cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
            id: 1,
            linkUrl: "section/hats"
        },
        {
            title: "jackets",
            imageUrl:
                "https://images.unsplash.com/photo-1472168087442-46b12008e7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1329&q=80",
            id: 2,
            linkUrl: "section/jackets"
        },
        {
            title: "sneakers",
            imageUrl:
                "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            id: 3,
            linkUrl: "section/sneakers"
        },
        {
            title: "womens",
            imageUrl:
                "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            size: "large",
            id: 4,
            linkUrl: "section/womens"
        },
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            size: "large",
            id: 5,
            linkUrl: "section/mens"
        }
    ]
};

const directoryReducer = (state = initialState, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
