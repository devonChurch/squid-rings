const request = (() => {

    // set a action with a delay before call and a key to reference again
    // ability to call any instance via their key and call again
        // this will reset the delay again
        // can also call "ALL" to call everything in the stack

    let i, elapsed;

    const

        instances = {},

        frequency = 60 * 10, // Every 10 seconds

        milliseconds = () => new Date().getTime(),

        add = () => {


        },

        call = () => {


        },

        query = () => {

            console.log('query!');
        },

        timer = () => {

            i += 1;
            if (i % frequency === 0) query();

            // console.log(i);

            requestAnimationFrame(() => timer());

        },

        init = (() => {

            i = 0;
            elapsed = milliseconds();
            timer();

        })();

    return {add, call};

})();

module.exports = request;
