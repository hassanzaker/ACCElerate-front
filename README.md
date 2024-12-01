
# Hockey Analyzer Front-End

This is the front-end for the Hockey Analyzer application, built with React and styled using Bootstrap.

## Features

- Upload and analyze hockey game videos.
- View processed videos and player-specific plots.
- Interactive and user-friendly interface.

## Technologies Used

- React
- Bootstrap
- Axios

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hockey-analyzer-frontend.git
   cd hockey-analyzer-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:
```bash
npm run build
```

The production build will be available in the `build` directory.

## Docker

You can also containerize the application using Docker.

### Steps:
1. Build the Docker image:
   ```bash
   docker build -t hockey-analyzer-frontend .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 hockey-analyzer-frontend
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
