const Contact = () => {
// (function onSubmit () {
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();


	return (
		<>
			<div>
				<h3>Contact Page</h3>
			</div>
			<form className='needs-validation' novalidate>
				<div className='form-row'>
					<div className='form-group col-md-6 mb-3'>
						<label for='validationCustom01'>Name</label>
						<input
							type='text'
							className='form-control'
							id='validationCustom01'
							placeholder='Name'
							required
						/>
            <div className='invalid-feedback'>Please provide a name.</div>
					</div>
					<div className='form-group col-md-6 mb-3'>
						<label for='validationCustom02'>Email</label>
						<input
							type='text'
							className='form-control'
							id='validationCustom02'
							placeholder='Email'
							required
						/>
            <div className='invalid-feedback'>Please provide an email.</div>
					</div>
				</div>
				<div className='form-group mb-3'>
					<label for='validationCustom03'>Message</label>
					<input
						type='text'
						className='form-control'
						id='validationCustom03'
						placeholder='Message'
						required
					/>
					<div className='invalid-feedback'>Please provide a message.</div>
				</div>

				<button type='submit' className='btn btn-primary'>
					Get In Touch
				</button>
			</form>
		</>
  );
};


export default Contact;
