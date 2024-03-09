interface VerisyncConfig {
    flow_id: string;
    client_id: string;
    redirect_url: string;
    metadata?: object;
}

interface VerisyncParams {
    [key: string]: string
}

class Verisync {
    config: VerisyncConfig;

    constructor(config: VerisyncConfig) {
        this.config = config;
    }

    private constructUrlSearchParams(params: VerisyncParams) {
        const urlParams = new URLSearchParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                urlParams.append(key, String(params[key]));
            }
        }
        return urlParams.toString();
    }

    verify(email: string) {
        const params: VerisyncParams = {
            flow_id: this.config.flow_id,
            client_id: this.config.client_id,
            email: email || "",
            redirect_url: this.config.redirect_url,
            metadata: JSON.stringify(this.config.metadata || {}),
        };
        const urlParams = this.constructUrlSearchParams(params);
        window.location.href = `https://app.verisync.co/synchronizer?${urlParams}`;
    }
}

export default Verisync;