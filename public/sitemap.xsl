<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>Sitemap | Frontend Developer Portfolio</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<style type="text/css">
					:root {
						--primary-light: rgb(244, 162, 97);
						--secondary-light: rgb(231, 111, 81);
						--surface-light: rgb(38, 70, 83);
						--primary-dark: rgb(60, 22, 66);
						--surface-dark: rgb(178, 255, 158);
					}
					
					body {
						font-family: 'IBM Plex Mono', monospace;
						color: var(--surface-light);
						background-color: #ffffff;
						max-width: 90rem;
						margin: 0 auto;
						padding: 2rem;
						line-height: 1.5;
					}

					@media (prefers-color-scheme: dark) {
						body {
							background-color: var(--primary-dark);
							color: var(--surface-dark);
						}
					}

					.header {
						margin-bottom: 3rem;
						text-align: center;
					}

					.header h1 {
						font-size: 2.5rem;
						font-weight: 700;
						margin-bottom: 1rem;
						color: var(--primary-light);
					}

					@media (prefers-color-scheme: dark) {
						.header h1 {
							color: var(--surface-dark);
						}
					}

					.stats {
						margin-bottom: 2rem;
						padding: 1rem;
						background-color: rgba(244, 162, 97, 0.1);
						border-radius: 0.5rem;
						text-align: center;
					}

					#sitemap {
						width: 100%;
						border-collapse: collapse;
						margin-top: 2rem;
						border-radius: 0.5rem;
						overflow: hidden;
						box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					}

					#sitemap tr:nth-child(odd) td {
						background-color: rgba(244, 162, 97, 0.05);
					}

					#sitemap tbody tr:hover td {
						background-color: rgba(231, 111, 81, 0.1);
					}

					.url {
						width: 50%;
						word-break: break-all;
					}

					.lastmod, .changefreq, .priority {
						width: 15%;
					}

					thead th {
						text-align: left;
						padding: 1.25rem 1rem;
						background-color: var(--primary-light);
						color: white;
						font-weight: 600;
						text-transform: uppercase;
						letter-spacing: 0.05em;
					}

					@media (prefers-color-scheme: dark) {
						thead th {
							background-color: var(--primary-dark);
							color: var(--surface-dark);
						}
					}

					tbody td {
						padding: 1rem;
						border-bottom: 1px solid rgba(244, 162, 97, 0.2);
					}

					td a {
						color: var(--secondary-light);
						text-decoration: none;
						transition: color 0.2s ease;
					}

					@media (prefers-color-scheme: dark) {
						td a {
							color: var(--surface-dark);
						}
					}

					td a:hover {
						color: var(--primary-light);
						text-decoration: underline;
					}

					.priority-high {
						color: #2dd4bf;
						font-weight: 600;
					}

					.priority-medium {
						color: var(--primary-light);
					}

					.priority-low {
						color: var(--secondary-light);
					}

					@media (max-width: 768px) {
						body {
							padding: 1rem;
						}

						.header h1 {
							font-size: 2rem;
						}

						#sitemap {
							display: block;
							overflow-x: auto;
							white-space: nowrap;
						}

						.lastmod, .changefreq, .priority {
							width: auto;
						}
					}

					.footer {
						margin-top: 3rem;
						text-align: center;
						font-size: 0.875rem;
						color: var(--surface-light);
					}

					@media (prefers-color-scheme: dark) {
						.footer {
							color: var(--surface-dark);
						}
					}
				</style>
			</head>
			<body>
				<div class="header">
					<h1>Site Map</h1>
					<p>Last updated: <xsl:value-of select="format-date(current-date(), '[MNn] [D], [Y]')"/></p>
				</div>

				<div class="stats">
					<p>
						Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
					</p>
				</div>

				<table id="sitemap">
					<thead>
						<tr>
							<th>URL</th>
							<th>Last Modified</th>
							<th>Change Frequency</th>
							<th>Priority</th>
						</tr>
					</thead>
					<tbody>
						<xsl:for-each select="sitemap:urlset/sitemap:url">
							<tr>
								<td class="url">
									<a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
								</td>
								<td class="lastmod">
									<xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
								</td>
								<td class="changefreq">
									<xsl:value-of select="sitemap:changefreq"/>
								</td>
								<td class="priority">
									<xsl:choose>
										<xsl:when test="sitemap:priority >= 0.8">
											<span class="priority-high">
												<xsl:value-of select="sitemap:priority"/>
											</span>
										</xsl:when>
										<xsl:when test="sitemap:priority >= 0.5">
											<span class="priority-medium">
												<xsl:value-of select="sitemap:priority"/>
											</span>
										</xsl:when>
										<xsl:otherwise>
											<span class="priority-low">
												<xsl:value-of select="sitemap:priority"/>
											</span>
										</xsl:otherwise>
									</xsl:choose>
								</td>
							</tr>
						</xsl:for-each>
					</tbody>
				</table>

				<div class="footer">
					<p>© 2024 HREM Portfolio. All rights reserved.</p>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>