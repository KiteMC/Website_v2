/**
 * Download API - Fetches releases from GitHub
 * Fixed version with proper type definitions and error handling
 */

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
}

export interface Release {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  html_url: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets: ReleaseAsset[];
}

export interface ApiBuild {
  version: string;
  tag: string;
  name: string;
  body: string;
  url: string;
  publishedAt: string;
  prerelease: boolean;
  assets: ReleaseAsset[];
}

/**
 * Fetch all releases from GitHub
 */
export async function getGitHubReleases(owner: string, repo: string): Promise<Release[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch GitHub releases:', error);
    return [];
  }
}

/**
 * Get available versions (tags) from releases
 */
export async function getVersions(owner: string, repo: string): Promise<string[]> {
  const releases = await getGitHubReleases(owner, repo);
  
  if (releases.length === 0) {
    // Fallback versions
    if (repo === 'VerifyMC') {
      return ['v1.2.6', 'v1.2.5', 'v1.2.4'];
    }
    if (repo === 'SurviveX') {
      return ['ver/1.21.5', 'ver/1.21.4'];
    }
    return [];
  }
  
  return releases.map(r => r.tag_name);
}

/**
 * Convert GitHub Release to ApiBuild format
 */
function releaseToApiBuild(release: Release): ApiBuild {
  return {
    version: release.tag_name,
    tag: release.tag_name,
    name: release.name || release.tag_name,
    body: release.body || '',
    url: release.html_url,
    publishedAt: release.published_at,
    prerelease: release.prerelease,
    assets: release.assets,
  };
}

/**
 * Get builds/releases for a specific version or all
 */
export async function getBuilds(
  owner: string, 
  repo: string, 
  version?: string
): Promise<ApiBuild[]> {
  const releases = await getGitHubReleases(owner, repo);
  
  let filteredReleases = releases.filter(r => !r.draft);
  
  if (version) {
    filteredReleases = filteredReleases.filter(r => r.tag_name === version);
  }
  
  return filteredReleases.map(releaseToApiBuild);
}

/**
 * Get the latest release
 */
export async function getLatestRelease(owner: string, repo: string): Promise<ApiBuild | null> {
  const releases = await getGitHubReleases(owner, repo);
  const latest = releases.find(r => !r.draft && !r.prerelease);
  
  if (!latest) {
    const anyRelease = releases.find(r => !r.draft);
    return anyRelease ? releaseToApiBuild(anyRelease) : null;
  }
  
  return releaseToApiBuild(latest);
}

/**
 * Get download link for a specific asset
 */
export function getDownloadLink(
  owner: string, 
  repo: string, 
  tag: string, 
  fileName?: string
): string {
  if (fileName) {
    return `https://github.com/${owner}/${repo}/releases/download/${tag}/${fileName}`;
  }
  return `https://github.com/${owner}/${repo}/releases/tag/${tag}`;
}

/**
 * Filter releases that contain proxy plugin assets
 */
export function filterProxyReleases(builds: ApiBuild[]): ApiBuild[] {
  return builds.filter(build => 
    build.assets.some(asset => asset.name.includes('verifymc-proxy'))
  );
}

/**
 * Get proxy asset from a release
 */
export function getProxyAsset(build: ApiBuild): ReleaseAsset | undefined {
  return build.assets.find(asset => asset.name.includes('verifymc-proxy'));
}

/**
 * Get main plugin asset from a release (non-proxy jar)
 */
export function getMainAsset(build: ApiBuild): ReleaseAsset | undefined {
  return build.assets.find(asset => 
    asset.name.endsWith('.jar') && !asset.name.includes('proxy')
  );
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Format date
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
