import { useStaticQuery, graphql } from "gatsby"

export const useTitle = () => {

	const query = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return { 
		title: query.site?.siteMetadata?.title || 'rferl'
	 }
}