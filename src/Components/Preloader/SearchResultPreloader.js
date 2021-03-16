import React from 'react';
import ContentLoader from 'react-content-loader';

const searchResultPreloader = () => {
    return (
        <>
            <div className="my-4">
                <ContentLoader
                    speed={2}
                    height={160}
                    width={"100%"}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="45%" height="160" />
                    <rect x="50%" y="5" rx="4" ry="4" width="40%" height="10" />
                    <rect x="50%" y="20%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="40%" rx="4" ry="4" width="40%" height="5" />
                    <rect x="50%" y="60%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="80%" rx="3" ry="4" width="20%" height="20" />
                    <rect x="75%" y="80%" rx="3" ry="4" width="12%" height="20" />
                </ContentLoader>
            </div>
            <div className="my-4">
                <ContentLoader
                    speed={2}
                    height={160}
                    width={"100%"}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="45%" height="160" />
                    <rect x="50%" y="5" rx="4" ry="4" width="40%" height="10" />
                    <rect x="50%" y="20%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="40%" rx="4" ry="4" width="40%" height="5" />
                    <rect x="50%" y="60%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="80%" rx="3" ry="4" width="20%" height="20" />
                    <rect x="75%" y="80%" rx="3" ry="4" width="12%" height="20" />
                </ContentLoader>
            </div>
            <div className="my-4">
                <ContentLoader
                    speed={2}
                    height={160}
                    width={"100%"}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="45%" height="160" />
                    <rect x="50%" y="5" rx="4" ry="4" width="40%" height="10" />
                    <rect x="50%" y="20%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="40%" rx="4" ry="4" width="40%" height="5" />
                    <rect x="50%" y="60%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="80%" rx="3" ry="4" width="20%" height="20" />
                    <rect x="75%" y="80%" rx="3" ry="4" width="12%" height="20" />
                </ContentLoader>
            </div>
            <div className="my-4">
                <ContentLoader
                    speed={2}
                    height={160}
                    width={"100%"}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="45%" height="160" />
                    <rect x="50%" y="5" rx="4" ry="4" width="40%" height="10" />
                    <rect x="50%" y="20%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="40%" rx="4" ry="4" width="40%" height="5" />
                    <rect x="50%" y="60%" rx="3" ry="4" width="40%" height="5" />
                    <rect x="50%" y="80%" rx="3" ry="4" width="20%" height="20" />
                    <rect x="75%" y="80%" rx="3" ry="4" width="12%" height="20" />
                </ContentLoader>
            </div>
        </>
    );
};

export default searchResultPreloader;