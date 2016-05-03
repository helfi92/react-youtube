import React, {Component} from 'react';
import VideoListItem from './video_list_item';

// In a class, props would be available as this.props
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	})
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;