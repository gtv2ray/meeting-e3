// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardHeader, CardTitle, CardContent, Input, useToast } from '@/components/ui';
// @ts-ignore;
import { Lock, Mail, User } from 'lucide-react';

export default function Register(props) {
  const {
    $w
  } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleRegister = async () => {
    try {
      setLoading(true);
      await $w.cloud.callDataSource({
        dataSourceName: 'users',
        methodName: 'wedaCreateV2',
        params: {
          data: {
            name,
            email,
            password,
            role: 'user'
          }
        }
      });
      toast({
        title: '注册成功'
      });
      $w.utils.navigateTo({
        pageId: 'login'
      });
    } catch (error) {
      toast({
        title: '注册失败',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">用户注册</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>姓名</span>
            </div>
            <Input placeholder="请输入姓名" value={name} onChange={e => setName(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>邮箱</span>
            </div>
            <Input type="email" placeholder="请输入邮箱" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4" />
              <span>密码</span>
            </div>
            <Input type="password" placeholder="请输入密码" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          
          <Button className="w-full" onClick={handleRegister} disabled={loading}>
            {loading ? '注册中...' : '注册'}
          </Button>
        </CardContent>
      </Card>
    </div>;
}