var api = {

    getQuestions(data) {

        // When debugging on android use 10.0.3.2 instead of localhost

        var url = `http://localhost:3000/api/${data}`;

        return fetch(url).then((res) => res.json());
    },

    getImagesUri(data) {
        return `http://localhost:3000/images/${data}/`;
    }

};

module.exports = api;