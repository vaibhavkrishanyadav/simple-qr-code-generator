# QR Code Generator

This Node.js application generates QR codes for given URLs using the `qrcode` library and serves them over HTTP.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhavkrishanyadav/simple-qr-code-generator
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-qr-code-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

To start the server, run:

```bash
npm start
```

By default, the server runs on port 3000. You can specify a different port using the `PORT` environment variable.

To generate a QR code, send a GET request to `/generateQR` endpoint with the URL as a query parameter:

```
http://localhost:7000/generateQR?url=<your-url>
```

Replace `<your-url>` with the URL you want to encode into a QR code.

### Example

If you want to generate a QR code for `https://www.example.com`, you would send a GET request to:

```
http://localhost:7000/generateQR?url=https://www.example.com
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.