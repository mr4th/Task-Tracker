function Button({ color, text, onAdd }) {
	return (
		<div className="btn btn-success" onClick={onAdd} style={{ backgroundColor: color }}>
			{text}
		</div>
	);
}

export default Button;
