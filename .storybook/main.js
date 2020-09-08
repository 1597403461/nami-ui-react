module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/components/**/*.stories.tsx"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    webpackFinal: async config => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            presets: [['react-app', { flow: false, typescript: true }]],
                        }
                    },
                    {
                        loader: require.resolve("react-docgen-typescript-loader"),
                        options: {
                            shouldExtractLiteralValuesFromEnum: true,
                            propFilter: (prop) => {
                                if (prop.parent) {
                                    return !prop.parent.fileName.includes('node_modules')
                                }
                                return true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
        );
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
}
