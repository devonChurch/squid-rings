console.log('request');

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

        run = (key) => {

            const {action, delay} = instances[key];

            action();
            instances[key] = {
                ...instances[key],
                next: elapsed + delay
            };

        },

        call = (ref) => {

            const keys = ref === 'all' ? Object.keys(instances) : [ref];

            elapsed = milliseconds();
            keys.forEach((key) => run(key));

        },

        add = ({action, delay, key}) => {

            const next = milliseconds() + delay;

            instances[key] = {action, delay, next};
            // Immediately call to get the initial data injected into the UI.
            call(key);

        },

        query = () => {

            elapsed = milliseconds();
            Object.keys(instances).forEach((key) => {

                const {next} = instances[key];

                if (elapsed >= next) run(key);

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
