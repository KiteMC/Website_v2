# KiteMC Website

KiteMC official documentation website built with VitePress.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
Website_v2/
├── package.json
├── tsconfig.json
├── .gitignore
├── .prettierrc
└── pages/
    ├── .vitepress/
    │   ├── config.mts      # VitePress configuration
    │   └── sidebar.mts     # Sidebar configuration
    ├── index.md            # English homepage
    ├── zh/                 # Chinese documentation
    │   ├── index.md
    │   └── docs/
    └── docs/               # English documentation
        ├── survivex/
        └── verifymc/
```

## License

[MIT License](LICENSE) © KiteMC
