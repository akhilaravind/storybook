import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './InfiniteScroll.scss';

const InfiniteScrollList = (props) => {
	const { items, height, loadMore, hasMore, loader, endMessage } = props;
	return (
		<InfiniteScroll
			dataLength={items.length}
			height={height}
			next={loadMore}
			hasMore={hasMore}
			loader={loader}
			endMessage={endMessage}
			// below props only if you need pull down functionality
			// refreshFunction={onReset}
			// pullDownToRefresh
			// pullDownToRefreshContent={
			// 	<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
			// }
			// releaseToRefreshContent={
			// 	<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
			// }
		>
			{
				items.map((item, index) => {
					return (
						<div key={index}>
							{item.label}
						</div>
					)
				})
			}
		</InfiniteScroll>
	)
}

export default InfiniteScrollList;