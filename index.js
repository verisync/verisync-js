class Verisync {
    config;
    appId;

    constructor(config) {
        this.config = config;
        this.appId = encodeURIComponent(
            JSON.stringify({
                redirectUrl: config.redirectUrl,
                clientId: config.clientId,
                flowId: config.flowId,
                meta: config.meta,
            })
        );
    }

    verify() {
        window.open(`https://app.verisync.co/synchroniser/${this.appId}`);
    }
}

export default Verisync;