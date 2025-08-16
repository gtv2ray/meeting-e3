// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Calendar, Users, FileText, PieChart } from 'lucide-react';

export default function Home(props) {
  const {
    $w
  } = props;
  const features = [{
    icon: <Calendar className="h-8 w-8" />,
    title: "会议管理",
    description: "创建、安排和管理所有会议",
    bgColor: "bg-blue-500"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "参会人员",
    description: "管理参会人员信息和权限",
    bgColor: "bg-green-500"
  }, {
    icon: <FileText className="h-8 w-8" />,
    title: "会议资料",
    description: "上传、共享和管理会议文件",
    bgColor: "bg-purple-500"
  }, {
    icon: <PieChart className="h-8 w-8" />,
    title: "统计分析",
    description: "查看会议数据和参与情况",
    bgColor: "bg-yellow-500"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* 顶部标题区 */}
        <header className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="text-4xl text-yellow-400 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18 7V3"></path>
                <path d="M15 3v18"></path>
                <path d="M21 15H3"></path>
                <path d="M21 11H3"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg">
              山金期货会议管理系统
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            专业高效的期货行业会议管理平台，助力企业会议全流程数字化
          </p>
        </header>

        {/* 功能卡片区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg cursor-pointer" onClick={() => $w.utils.navigateTo({
          pageId: 'login'
        })}>
              <div className="text-center">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>)}
        </div>

        {/* 底部进入系统按钮 */}
        <div className="mt-16 text-center">
          <Button size="lg" className="px-8 py-6 text-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold" onClick={() => $w.utils.navigateTo({
          pageId: 'login'
        })}>
            进入会议管理系统
          </Button>
        </div>
      </div>
    </div>;
}