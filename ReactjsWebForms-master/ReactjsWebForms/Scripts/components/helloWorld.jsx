var PageContent =  React.createClass({
	render: function() {	
		return (
			<div>
				<h2>My test</h2>
				Hello world from {this.props.user}
			</div>
		);
    }	
});