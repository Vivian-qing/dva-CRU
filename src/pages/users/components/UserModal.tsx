import { Button, Modal, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';

const UserModal = (props) => {
    const { open, closeHandle, record, onFinish } = props
    const [form] = Form.useForm();
    //当visible有变化时取值
    useEffect(() => {
        form.setFieldsValue(record);
    }, [open])
    
    const onOk = () => {
        form.submit();
    }



    const onFinishFailed = errorInfo => {
        message.error('错误:'+errorInfo)
    }

    return (
        <div>
            <Modal
                title="Basic Modal"
                open={open}
                onOk={onOk}
                onCancel={closeHandle}
                forceRender
            >
                <Form
                    name="basic"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Create Time"
                        name="create_time"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default UserModal;