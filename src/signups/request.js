module.exports = () => {

    const delay = Math.random() * 3000;
    const response = new Date().getTime();

    return new Promise((resolve) => {

        setTimeout(() => resolve(response), delay);

    });

};
