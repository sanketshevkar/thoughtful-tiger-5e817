import React from 'react';
import _ from 'lodash';
import Head from next/

import { Layout } from '../components/index';
import { markdownify } from '../utils';

export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <article className="page py-5 py-sm-6">
                    <div className="container container--medium">
                        {title && <header className="page__header"><h1 className="page__title">{title}</h1></header>}
                        {markdownContent && <div className="page__body text-block">{markdownify(markdownContent)}</div>}
                    </div>
                </article>
                <div data-snack-id="@sanketshevkar/unnamed-snack" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#F9F9F9;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
                <script async src="https://snack.expo.dev/embed.js"></script>
            </Layout>
        );
    }
}
