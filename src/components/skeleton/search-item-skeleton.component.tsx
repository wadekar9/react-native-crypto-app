import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const SearchItemSkeleton = () => {
    return (
        <SkeletonPlaceholder borderRadius={4}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={10} marginBottom={10}>
                <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
                <SkeletonPlaceholder.Item marginLeft={10} flex={1}>
                    <SkeletonPlaceholder.Item width="100%" height={20} borderRadius={4} />
                    <SkeletonPlaceholder.Item marginTop={6} width="60%" height={16} borderRadius={4} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    )
}

export default SearchItemSkeleton