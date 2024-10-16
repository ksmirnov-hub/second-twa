import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import './currentTask.scss';
import Usd from '../../images/usd.png';
import NoteActive from '../../images/note-active.png';
import Category from '../../images/category.png';
import ArrowBack from '../../images/arrow-white.png';
import Home from '../../images/home.png';
import Expand from '../../images/expand.png';
import Collapse from '../../images/collapse.png';
import EnterFirst from '../../images/enter-first.png';
import { Spinner } from '@chakra-ui/react';
import {
    Modal,
    Box,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Textarea,
    useDisclosure,
    background
  } from '@chakra-ui/react';

import {
    useGetOneTaskQuery,
    useCompleteTaskMutation,
    useReviewTaskMutation,
    useGetQuoteQuery
} from '../../store';

const Tasks = () => {
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  const [review, setReview] = useState('');
  const [isHowToCollapsed, setIsHowToCollapsed] = useState(true);
  const [isWhatForCollapsed, setIsWhatForCollapsed] = useState(true);
  const [isCompleteError, setIsCompleteError] = useState(false);
  const [skip, setSkip] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, data = []} = useGetOneTaskQuery(state?.task_id);
  const { isLoading: isQuoteLoading, data: quote = {}} = useGetQuoteQuery(null, {
    skip
  })

  const [ 
    completeTask,
    {
        isLoading: isCompletionLoading,
        isSuccess,
        isError,
        error,
        reset
    }
  ] = useCompleteTaskMutation()

  const [
    reviewTask,
    {
        isLoading: isReviewSending,
        isSuccess: isReviewSendingSuccess,
        isError: isReviewSendingError,
        error: reviewError,
        reset: resetSendingReview
    }
  ] = useReviewTaskMutation();

  const basicBoxStyles = {
    background: 'rgba(249, 249, 249, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100% !important',
    paddingTop: '63px'
  }

  const titleStyle = {
    fontFamily: 'SF Pro Display',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '25px',
    textAlign: 'center'
  }

  useEffect(() => {
    if (isOpen) {
        setSkip(false)
    }
  }, [isOpen])

  useEffect(() => {
    onClose();
  }, [isSuccess])

  useEffect(() => {
    if (isSuccess) {
        resetSendingReview();
        reviewTask({
            taskId: state?.task_id,
            review
        });
    }
  }, [review, state?.task_id, isSuccess])

  useEffect(() => {
    if (isError) {
        setReview('');
        setIsCompleteError(true);
        setTimeout(() => {
            setIsCompleteError(false);
            reset()
            onClose();
        }, 1500);
    }
  }, [isError])


  return (
    <div className="current">
        <div className='header-categories'>
            <div className='arrow'>
                <button
                    className='button-flat'
                    onClick={() => {navigate('/tasks')}}  
                >
                    <img src={ArrowBack} alt="" />
                </button>
            </div>
            <div className='title'>Задания</div>
        </div>
        <div className='current-task-content'>
        {
                isLoading ? (
                    <>
                        <div className='spinner'>
                            <Spinner size='xl' />
                        </div>
                    </>
                ) : (
                        <>
                            <div className='current-task-title'>
                                <div>
                                    {data.name}
                                </div>
                                <div className='date'>
                                    01.01.2024
                                </div>
                            </div>
                            <div className='task-instructions'>
                                <div className='howto'>
                                    <div>Как делать:</div>
                                    <div className={`innerText ${isHowToCollapsed ? 'collapsed' : ''}`}>
                                        {data.description}
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setIsHowToCollapsed(!isHowToCollapsed)}
                                        >
                                            <div className='expand'>
                                                <div>{isHowToCollapsed ? 'Читать подробнее' : 'Скрыть'}</div>
                                                <div>
                                                    <img src={isHowToCollapsed ? Expand : Collapse} alt="" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='howto'>
                                    <div>Зачем делать:</div>
                                    <div className={`innerText ${isWhatForCollapsed ? 'collapsed' : ''}`}>
                                        {data.description2}
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setIsWhatForCollapsed(!isWhatForCollapsed)}
                                        >
                                            <div className='expand'>
                                            <div>{isWhatForCollapsed ? 'Читать подробнее' : 'Скрыть'}</div>
                                                <div>
                                                    <img src={isWhatForCollapsed ? Expand : Collapse} alt="" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            <div className='current-tasks-controls'>
                <div>
                    <button
                        onClick={onOpen}
                    >
                        Выполнено
                    </button>
                </div>
                <div>
                    <button>
                        Отказаться
                    </button>
                </div>
            </div>
            <div className="down">
                <div>
                    <img src={Usd} alt="" />
                </div>
                <div>
                    <img src={NoteActive} alt="" />
                </div>
                <div>
                    <button
                        className='button-flat'
                        onClick={() => {navigate('/categories')}}  
                    >
                    <img src={Category} alt="" />
                    </button>
                </div>
                <div>
                    <button
                        className='button-flat'
                        onClick={() => {navigate('/home')}}  
                    >
                        <img src={Home} alt="" />
                    </button>
                </div>
            </div>
        </div>
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size='full'
        >
            <ModalOverlay />
            <ModalContent
                color='tomato'
                w='100%'
                bg='rgba(249, 249, 249, 1)'
                className='modalContent'
            >
                <ModalBody
                    sx={basicBoxStyles}
                    className='modalBody'
                >
            {
                    isCompletionLoading ? (
                        <>
                            <div className='spinner'>
                                <Spinner size='xl' />
                            </div>
                        </>
                    ) : (
                            <>
                            {
                                isCompleteError ? (
                                    <div>
                                         { error?.data?.error }
                                    </div>
                                ) : (
                                    <>
                                        <Box
                                            color='rgba(0, 184, 88, 1)'
                                            sx={titleStyle}
                                        >
                                            Задание выполнено
                                        </Box>
                                        <Box sx={{display: 'flex', columnGap: '6px'}} mt='8px' >
                                            <Box color='rgba(49, 55, 51, 1)'>Получено:</Box>
                                            <Box color='rgba(0, 184, 88, 1)'>1 life</Box>
                                        </Box>
                                        <Box mt='20px'>
                                            <img src={EnterFirst} width='170px' height='170px' />
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            rowGap: '12px',
                                            height: '280px',
                                            padding: '28px 12px'
                                        }}>
                                            <Box
                                            
                                            >
                                                <Box
                                                    sx={{
                                                        fontFamily: 'SF Pro Display',
                                                        fontSize: '18px',
                                                        fontWeight: '600',
                                                        lineHeight: '18px',
                                                        textAlign: 'center',
                                                        color: 'rgba(38, 38, 38, 1)'
                                                    }}
                                                >
                                                    <span style={{
                                                        color:  'rgba(0, 184, 88, 1)'
                                                    }}>Поделись </span>
                                                    впечатлением о задании, и 
                                                    <span style={{
                                                        color:  'rgba(0, 184, 88, 1)'
                                                    }}> получи х2 </span>
                                                    к награде!
                                                </Box>
                                                <Box
                                                    sx={{
                                                        marginTop: '8px',
                                                        fontFamily: 'SF Pro Display',
                                                        fontSize: '16px',
                                                        fontWeight: '400',
                                                        lineHeight: '20px',
                                                        textAlign: 'center',
                                                        color: 'rgba(38, 38, 38, 0.6)'
                                                    }}
                                                >
                                                    Это поможет нам делать задания интереснее и полезнее в будущем
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Textarea
                                                    sx={{
                                                        fontFamily: 'SF Pro Display',
                                                        fontSize: '12px',
                                                        fontWeight: '300',
                                                        color: 'rgba(137, 137, 137, 1)'
                                                    }}
                                                    placeholder='Напиши, что понравилось/не понравилось в задании'
                                                    onChange={(e) => setReview(e.target.value)}
                                                />
                                            </Box>
                                            <Box sx={{
                                                    fontFamily: 'SF Pro Display',
                                                    fontSize: '12px',
                                                    fontWeight: '300',
                                                    color: 'rgba(137, 137, 137, 1)'
                                                }}>
                                                {'"' + quote.text + '" ' + quote.author}
                                            </Box>
                                        </Box>
                                    </>
                                )
                            }

                            </>
                        )
                }

                </ModalBody>

                <ModalFooter>
                    <Button
                        isDisabled={!review.length}
                        bg='rgba(0, 184, 88, 1)'
                        mr={3}
                        w='100%'
                        color='white'
                        onClick={() => {
                            console.log('review', review)
                            if (!review.length) {
                                return false;
                            }
                            completeTask(state?.task_id);
                        }}
                    >
                        Принять
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  );
};

export default Tasks;