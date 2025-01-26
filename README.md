# Micro Frontend POC

A micro frontend architecture project demonstrating the integration of a shell application with common components library. This project showcases a portfolio website with modular components and clean architecture.

## Features

- Modular micro frontend architecture
- Shared component library
- Responsive design
- Clean and modern UI
- Portfolio sections:
  - About
  - Experience
  - Education
  - Contact
- Dynamic routing

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/siddharthkoundal/mfe-poc.git
cd micro-frontend-basic
```

2. Install root-level dependencies:

```bash
npm install
```

3. Install dependencies for both projects:

```bash
npm run install:all
```

## Development

To run both applications in development mode:

```bash
npm start
```

This will start:

- Shell application on http://localhost:3000
- Common Components Library on http://localhost:3001

To run applications individually:

```bash
# Start only shell
npm run start:shell

# Start only common components
npm run start:common
```

## Building for Production

To build both applications:

```bash
npm run build
```

To build applications individually:

```bash
# Build only shell
npm run build:shell

# Build only common components
npm run build:common
```

## Project Details

### Shell Application (Port 3000)

- Main application container
- Handles routing and layout
- Integrates common components
- Manages global state
- Handles navigation

### Common Components Library (Port 3001)

- Shared component library
- Reusable UI components:
  - Header
  - Footer
  - About section
  - Experience section
  - Education section
  - Contact section
- Common utilities and styles
- Responsive design components

## Available Scripts

Root level:

- `npm start` - Runs both applications
- `npm run install:all` - Installs dependencies for both projects
- `npm run build` - Builds both applications for production

Shell application:

- `npm run start:shell` - Runs shell application
- `npm run build:shell` - Builds shell for production

Common Components:

- `npm run start:common` - Runs common components library
- `npm run build:common` - Builds common components for production

## Technologies Used

### Core Technologies

- React 18
- React Router DOM 7
- Webpack 5
- Babel

### Styling

- CSS Modules
- Modern CSS features
- Responsive design principles

### Development Tools

- Webpack Dev Server
- Hot Module Replacement
- Environment Variables
- CSS Loaders
- Babel Loaders

## Best Practices

- Component-based architecture
- Clean code principles
- Responsive design patterns
- Performance optimization
- Code splitting
- Lazy loading
- Modern CSS techniques

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
