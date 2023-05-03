import {Modal} from "@mui/material";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import styles from './modal.module.scss'
import Button from "@ui/Button";
import {PostCreateType} from "@type/post.type.ts";
import {useAppDispatch} from "@hooks/useAppDispatch.ts";
import {addPostToState} from "@store/posts/posts.slice.ts";

type ModalComponentProps = {
  open: boolean
  handleClose: () => void
}

const ModalComponent: FC<ModalComponentProps> = ({open, handleClose}) => {
  const [input, setInput] = useState({
    title: '',
    body: ''
  })
  const dispatch = useAppDispatch()
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [event.target.name]: event.target.value})
  }
  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newPost: PostCreateType = {
      title: input.title,
      body: input.body,
      userId: +Math.random().toFixed(1) * 100
    }
    dispatch(addPostToState(newPost))
    setInput({title: '', body: ''})
    handleClose()
  }
  return (
      <Modal open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
             className={styles.wrapper}
      >
        <form className={styles.modal} onSubmit={handleSubmitForm}>
          Create Your Task
          <input type="text" placeholder='Enter Title' required value={input.title} name='title'
                 onChange={handleChangeInput}/>
          <input type="text" placeholder='Enter Text' required value={input.body} name='body'
                 onChange={handleChangeInput}/>
          <Button onClick={() => ''}>Create</Button>
        </form>
      </Modal>
  );
};

export default ModalComponent;
