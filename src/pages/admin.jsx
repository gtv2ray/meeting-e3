// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui';
// @ts-ignore;
import { Users, Shield, Building, Lock } from 'lucide-react';

export default function AdminDashboard(props) {
  const {
    $w
  } = props;
  return <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">管理员控制台</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">用户管理</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <Button variant="outline" className="mt-4" onClick={() => $w.utils.navigateTo({
            pageId: 'users'
          })}>
              管理用户
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">部门管理</CardTitle>
            <Building className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <Button variant="outline" className="mt-4" onClick={() => $w.utils.navigateTo({
            pageId: 'departments'
          })}>
              管理部门
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">权限管理</CardTitle>
            <Lock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <Button variant="outline" className="mt-4" onClick={() => $w.utils.navigateTo({
            pageId: 'permissions'
          })}>
              管理权限
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">系统监控</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <Button variant="outline" className="mt-4">
              查看详情
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>最近活动</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">新用户注册</p>
                <p className="text-sm text-gray-500">张三 - 技术部</p>
              </div>
              <p className="text-sm text-gray-500">2分钟前</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">会议创建</p>
                <p className="text-sm text-gray-500">季度总结会议</p>
              </div>
              <p className="text-sm text-gray-500">1小时前</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
}