class Verisync {
    config;

    constructor(config) {
        this.config = config;
    }

    #constructUrlSearchParams(params) {
        const urlParams = new URLSearchParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                urlParams.append(key, params[key]);
            }
        }
        return urlParams.toString();
    }

    verify(email) {
        const params = {
            flow_id: this.config.flow_id,
            client_id: this.config.client_id,
            email: email || "",
            redirect_url: this.config.redirect_url,
            metadata: JSON.stringify(this.config.metadata || {}),
        };
        const urlParams = this.#constructUrlSearchParams(params);
        window.location.href = `https://verisync-webapp-git-develop-verisync.vercel.app/synchronizer?${urlParams}`;
    }
}

export default Verisync;