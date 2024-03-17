# verisync-js

The Verisync package is designed to facilitate the integration of Verisync's verification services into web applications. By utilizing this package, developers can streamline the process verifying their user identity using Verisync.

## Installation

```sh
npm install verisync-js

---- OR -----

yarn add verisync-js
```

## Usage

```javascript
import Verisync from 'verisync-js';

...
// Configure the Verisync instance
const config = {
    flow_id: 'your_flow_id',
    client_id: 'your_client_id',
    redirect_url: 'your_redirect_url',
    metadata: { key: 'value' } // Optional
};

// Create a Verisync instance with the specified configuration
const verisync = new Verisync(config);

...
// Initiate verification for an email address

const handleVerification() => {
    verisync.verify('user@example.com');
}

```

## Configuration (`VerisyncConfig`)

To use the Verisync class, you must first configure it with a `VerisyncConfig` object. This object contains essential information required for the verification process.

### Properties

#### client_id (required)

- **Type:** `string`
- **Description:** A unique identifier for the client using the Verisync service. It is essential for the Verisync backend to recognize the incoming request and process it accordingly.

#### flow_id (required)

- **Type:** `string`
- **Description:** Identifies the specific verification flow to be initiated. Different `flowId` values can represent different types of verification processes tailored to various requirements.

#### redirect_url (required)

- **Type:** `string`
- **Description:** The URL to which the user will be redirected once the verification process is completed.

#### metadata (optional)

- **Type:** `string`
- **Description:** An object that can include additional information relevant to the verification process. This metadata is sent to Verisync's server for processing and can be used to pass any extra details required for verification.

### Methods

#### `verify(email: string)`

Initiates the verification process for the given email address.

- `email`: The email address to be verified.

This method constructs a URL with the necessary parameters and redirects the user to Verisync's verification service. Upon completion of the verification process, the user is redirected back to the `redirect_url` specified in the configuration.
