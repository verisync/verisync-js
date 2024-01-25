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
            redirect_url: this.config.redirect_url,
            client_id: this.config.client_id,
            flow_id: this.config.flow_id,
            email: email,
        };
        const urlParams = this.#constructUrlSearchParams(params);
        window.location.href = `https://verisync-webapp-git-dev-verisync.vercel.app/synchroniser?${urlParams}`;
    }
}

export default Verisync;