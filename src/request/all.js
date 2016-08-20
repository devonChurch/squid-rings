const request = (() => {

    // set a action with a delay before call and a key to reference again
    // ability to call any instance via their key and call again
        // this will reset the delay again
        // can also call "ALL" to call everything in the stack

    let i, elapsed;

    const

        instances = {},

        frequency = 60 * 1, // Every 1 second

        milliseconds = () => new Date().getTime(),

        add = ({action, delay, key}) => {

            const next = milliseconds() + delay;

            instances[key] = {action, delay, next};

        },

        call = () => {


        },

        query = () => {

            // console.log('query!');
            elapsed = milliseconds();
            Object.keys(instances).forEach((key) => {


                // let instance = instances[key];
                const {action, delay, next} = instances[key];
                console.log('TESTING', key, `${elapsed} >= ${next}`);

                if (elapsed >= next) {

                    action();
                    instances[key] = {
                        ...instances[key],
                        next: elapsed + delay
                    };

                }

            });

        },

        timer = () => {

            i += 1;
            if (i % frequency === 0) query();
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
