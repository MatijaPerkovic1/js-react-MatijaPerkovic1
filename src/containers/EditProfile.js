import React from 'react';
import { observer } from 'mobx-react';
import styles from './EditProfile.module.css';
import useForm from 'react-hook-form';
import { AppContext } from '../state/AppContext';
import { useDropzone } from 'react-dropzone';
import { editProfile } from '../services/editProfile';

function EditProfileComponent(props) {

	const { appState } = React.useContext(AppContext);

	const { register, handleSubmit, errors } = useForm();
	const [profilePicture, setProfilePicture] = React.useState();

	function uploadPhoto(data) {
	    const body = new FormData();
	    body.append('image', profilePicture);
	    fetch('https://isa-js-upload.andreicek.dev/upload', {
	      method: 'POST',
	      headers: {
	        Authorization: appState.token,
	      },
	      body,
	    }).then((response) => response.json())
	      .then((res) => {
	      	editProfile(appState.userId, data.email, data.username , data.newPassword, res.imageUrl);
			props.history.push('/myprofile');
	      });
  	}
  	function closeEdit(e){
  		if(e.target.id == styles.editContainer){
  			props.history.push('/myprofile');
  		}
  	}
	function handleSaveChangesClick(data) {
		uploadPhoto(data);
	}
	function onDrop(files) {
    	setProfilePicture(files[0]);
 	}

 	const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

	return(
		<div id={styles.editContainer} onClick={closeEdit}>
			<form id={styles.editContent} onSubmit={handleSubmit(handleSaveChangesClick)}>
				<h2 id={styles.editTitle}>Edit profile</h2>
				<div {...getRootProps()} id={styles.changePhotoContainer}>
			      <input {...getInputProps()} />
			      <p id={styles.changePhotoLabel}>Change photo</p>
			    </div>
			    <div id={styles.editInputs}>
					<p className={styles.editLabel}>Username</p>
					<input 
						className={styles.formInput} 
						placeholder="Username" 
						name="username" 
						ref={register}
						/>
					<p className={styles.editLabel}>E-mail</p>
					<input 
						className={styles.formInput} 
						placeholder="Email" 
						name="email"
						ref={register} />
					<p className={styles.editLabel}>Old password</p>
					<input 
						className={styles.formInput} 
						type="password" 
						placeholder="Old password" 
						name="oldPassword"
						ref={register} />
					<p className={styles.editLabel}>New password</p>
					<input 
						className={styles.formInput} 
						type="password" 
						placeholder="New Password" 
						name="newPassword"
						ref={register} />
					<p className={styles.editLabel}>Confirm password</p>
					<input 
						className={styles.formInput} 
						type="password" 
						placeholder="Confirm Password" 
						name="confirmPassword"
						ref={register} />
				</div>
				<button id={styles.saveButton} type="submit">
					Save changes
				</button>
			</form>
		</div>
	)

}

export const EditProfile = observer(EditProfileComponent);