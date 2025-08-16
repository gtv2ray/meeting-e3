// @ts-ignore;
import React, { useEffect, useState } from 'react';
// @ts-ignore;
import { Button, Card, CardHeader, CardTitle, CardContent, useToast } from '@/components/ui';
// @ts-ignore;
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

// @ts-ignore;
import { MeetingReminder } from '@/components/MeetingReminder';
export default function MeetingDetail(props) {
  const {
    $w
  } = props;
  const meetingId = $w.page.dataset.params.id;
  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    toast
  } = useToast();
  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const result = await $w.cloud.callDataSource({
          dataSourceName: 'meetings',
          methodName: 'wedaGetItemV2',
          params: {
            filter: {
              where: {
                _id: {
                  $eq: meetingId
                }
              }
            },
            select: {
              $master: true
            }
          }
        });
        setMeeting(result);
      } catch (error) {
        toast({
          title: '加载失败',
          description: error.message,
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMeeting();
  }, [meetingId]);
  const handleDelete = async () => {
    try {
      await $w.cloud.callDataSource({
        dataSourceName: 'meetings',
        methodName: 'wedaDeleteV2',
        params: {
          filter: {
            where: {
              _id: {
                $eq: meetingId
              }
            }
          }
        }
      });
      toast({
        title: '删除成功'
      });
      $w.utils.navigateTo({
        pageId: 'meetings'
      });
    } catch (error) {
      toast({
        title: '删除失败',
        description: error.message,
        variant: 'destructive'
      });
    }
  };
  if (loading) return <div className="p-6">加载中...</div>;
  if (!meeting) return <div className="p-6">会议不存在</div>;
  return <div className="p-6 space-y-4">
      <Button variant="outline" onClick={() => $w.utils.navigateBack()} className="mb-4">
        返回
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{meeting.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{meeting.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{meeting.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{meeting.location}</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">会议描述</h3>
            <p className="text-gray-600">{meeting.description}</p>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">参会人员</h3>
            <div className="grid gap-2">
              {meeting.participants?.map((p, i) => <div key={i} className="flex justify-between">
                  <span>{p.name}</span>
                  <span className="text-gray-500">{p.role}</span>
                </div>)}
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center">
            <MeetingReminder meetingId={meetingId} $w={$w} />
            <div className="space-x-2">
              <Button variant="destructive" onClick={handleDelete}>
                删除会议
              </Button>
              <Button onClick={() => $w.utils.navigateTo({
              pageId: 'editMeeting',
              params: {
                id: meeting._id
              }
            })}>
                编辑会议
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
}