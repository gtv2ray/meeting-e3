// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
// @ts-ignore;
import { LogIn } from 'lucide-react';

export default function Home(props) {
  const {
    $w
  } = props;
  return <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-primary">会议管理系统</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">系统功能</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>创建和管理会议日程</li>
            <li>邀请和管理参会人员</li>
            <li>设置会议提醒</li>
            <li>共享会议资料</li>
            <li>记录会议纪要</li>
          </ul>
        </div>
        
        <div className="flex justify-center pt-4">
          <Button size="lg" onClick={() => $w.utils.navigateTo({
            pageId: 'login'
          })} className="px-8">
            <LogIn className="h-5 w-5 mr-2" />
            进入会议管理系统
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>;
}