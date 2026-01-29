import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (_jsx(_Fragment, { children: "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly." })),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (_jsxs(_Fragment, { children: ["Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ", _jsx("code", { children: "docs" }), " directory."] })),
    },
    {
        title: 'Powered by React',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (_jsx(_Fragment, { children: "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer." })),
    },
];
function Feature({ title, Svg, description }) {
    return (_jsxs("div", { className: clsx('col col--4'), children: [_jsx("div", { className: "text--center", children: _jsx(Svg, { className: styles.featureSvg, role: "img" }) }), _jsxs("div", { className: "text--center padding-horiz--md", children: [_jsx(Heading, { as: "h3", children: title }), _jsx("p", { children: description })] })] }));
}
export default function HomepageFeatures() {
    return (_jsx("section", { className: styles.features, children: _jsx("div", { className: "container", children: _jsx("div", { className: "row", children: FeatureList.map((props, idx) => (_jsx(Feature, { ...props }, idx))) }) }) }));
}
