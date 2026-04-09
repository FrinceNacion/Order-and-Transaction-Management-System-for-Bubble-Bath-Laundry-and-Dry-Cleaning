# Bubble Bath Management System

A React-based application for managing bubble bath order and transaction operations.

## Prerequisites

Before setting up this project, ensure you have the following installed on your system:

### 1. Node.js and npm
- **Download**: Visit [nodejs.org](https://nodejs.org/) and download the LTS version.
- **Verify Installation**:
  ```bash
  node --version
  npm --version
  ```
- Expected output: Node.js version 18+ and npm version 8+

### 2. Git
- **Download**: Visit [git-scm.com](https://git-scm.com/) and download Git for your OS.
- **Verify Installation**:
  ```bash
  git --version
  ```
- Expected output: Git version 2.30+

### 3. GitHub Account
- Create a free account at [github.com](https://github.com) if you don't have one.
- Install GitHub CLI (optional but recommended):
  ```bash
  # macOS with Homebrew
  brew install gh

  # Or download from https://cli.github.com/
  ```

## Project Setup

### 1. Clone or Download the Project

If you're starting from an existing repository:
```bash
git clone https://github.com/FrinceNacion/Order-and-Transaction-Management-System-for-Bubble-Bath-Laundry-and-Dry-Cleaning.git
cd bubble-bath-management-system
```

If you have the project files locally, navigate to the project directory:
```bash
cd /path/to/bubble-bath-management-system
```

### 2. Install Dependencies

Install all required Node.js packages:
```bash
npm install
```

This will install:
- React 19.2.4
- React DOM 19.2.4
- Vite (build tool)
- ESLint (code linting)
- Various development dependencies

### 3. Verify Installation

Check that everything is installed correctly:
```bash
npm list --depth=0
```

## Running the Application

### Development Server
Start the development server:
```bash
npm run dev
```

This will start Vite's development server. Open your browser and navigate to `http://localhost:5173` (or the URL shown in the terminal).

### Build for Production
Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build
Test the production build locally:
```bash
npm run preview
```

### Code Linting
Check code quality:
```bash
npm run lint
```

## Git and GitHub Setup

### 1. Initialize Git Repository (if not already done)

If the project isn't already a Git repository:
```bash
git init
```

### 2. Add Files to Git
```bash
git add .
```

### 3. Initial Commit
```bash
git commit -m "Initial commit: Bubble Bath Management System setup"
```

### 4. Create GitHub Repository

#### Option A: Using GitHub CLI (Recommended)
```bash
gh repo create bubble-bath-management-system --public --source=. --remote=origin --push
```

#### Option B: Manual Creation
1. Go to [github.com](https://github.com) and click "New repository"
2. Name it `bubble-bath-management-system`
3. Choose public or private
4. Don't initialize with README (since we already have one)
5. Click "Create repository"

Then add the remote and push:
```bash
git remote add origin https://github.com/yourusername/bubble-bath-management-system.git
git push -u origin main
```

### 5. Verify GitHub Setup
Check that your code is on GitHub:
```bash
git remote -v
git status
```

## Project Structure

```
bubble-bath-management-system/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/            # Images, fonts, etc.
│   ├── App.jsx            # Main React component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

## Development Workflow

1. Make changes to your code
2. Run `npm run lint` to check code quality
3. Test with `npm run dev`
4. Commit changes:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```

## Troubleshooting

### Common Issues

**npm install fails:**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules`
- Try again: `npm install`

**Port 5173 already in use:**
- Kill the process: `lsof -ti:5173 | xargs kill -9`
- Or use a different port: `npm run dev -- --port 3000`

**Git push fails:**
- Check remote: `git remote -v`
- Set upstream: `git push -u origin main`

### Getting Help

- React documentation: [react.dev](https://react.dev)
- Vite documentation: [vitejs.dev](https://vitejs.dev)
- Git documentation: [git-scm.com/doc](https://git-scm.com/doc)
- GitHub documentation: [docs.github.com](https://docs.github.com)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m "Add feature"`
6. Push: `git push origin feature-name`
7. Create a Pull Request

## License

This project is licensed under the MIT License.