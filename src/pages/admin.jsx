// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, Table, Input, Select, Modal, Badge } from '@/components/ui';
// @ts-ignore;
import { Users, Plus, Edit, Trash, Search, ArrowLeft } from 'lucide-react';

export default function AdminPage(props) {
  const {
    $w
  } = props;
  const [users, setUsers] = useState([{
    id: 1,
    name: '张三',
    dept: '技术部',
    role: 'admin',
    status: 'active'
  }, {
    id: 2,
    name: '李四',
    dept: '市场部',
    role: 'user',
    status: 'inactive'
  }]);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const filteredUsers = users.filter(user => user.name.includes(searchText) || user.dept.includes(searchText));
  return <div className="p-6">
      <Button onClick={() => $w.utils.navigateBack()} variant="outline" className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" /> 返回
      </Button>
      
      <Card>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">用户管理</h2>
          <div className="flex space-x-2">
            <Input placeholder="搜索用户..." className="w-64" value={searchText} onChange={e => setSearchText(e.target.value)} icon={<Search className="h-4 w-4" />} />
            <Button onClick={() => setShowModal(true)}>
              <Plus className="h-4 w-4 mr-2" /> 新增用户
            </Button>
          </div>
        </div>
        
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>ID</Table.Head>
              <Table.Head>姓名</Table.Head>
              <Table.Head>部门</Table.Head>
              <Table.Head>角色</Table.Head>
              <Table.Head>状态</Table.Head>
              <Table.Head>操作</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredUsers.map(user => <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.dept}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                    {user.status === 'active' ? '活跃' : '禁用'}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-1" /> 编辑
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash className="h-4 w-4 mr-1" /> 删除
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Card>

      {/* 新增用户模态框 */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>新增用户</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <Input label="用户名" placeholder="输入用户名" />
            <Input label="密码" type="password" placeholder="输入密码" />
            <Select label="部门">
              <Select.Option value="tech">技术部</Select.Option>
              <Select.Option value="market">市场部</Select.Option>
            </Select>
            <Select label="角色">
              <Select.Option value="admin">管理员</Select.Option>
              <Select.Option value="user">普通用户</Select.Option>
            </Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={() => setShowModal(false)}>取消</Button>
          <Button>保存</Button>
        </Modal.Footer>
      </Modal>
    </div>;
}