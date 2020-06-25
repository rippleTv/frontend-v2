import Head from 'next/head';
import {
	TWITTER_USERNAME,
	KEYWORDS,
	SITE_URL,
	SITE_DESCRIPTION,
} from '../lib/constants';

export default ({
	title,
	description = SITE_DESCRIPTION,
	image,
	url = SITE_URL,
	keywords = KEYWORDS,
}) => (
	<Head>
		<meta name='twitter:site' content={`@${TWITTER_USERNAME}`} />
		<meta
			name='twitter:card'
			content={image ? 'summary_large_image' : 'summary'}
		/>
		{title && <meta name='og:title' content={title} />}
		{url && <meta name='og:url' content={url} />}
		{description && <meta name='description' content={description} />}
		{description && <meta name='og:description' content={description} />}
		{image && <meta name='og:image' content={image} />}
		{keywords && <meta name='keywords' content={keywords} />}
	</Head>
);
