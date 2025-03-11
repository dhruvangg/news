"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Reply } from "lucide-react"

// Sample comments data
const sampleComments = [
  {
    id: 1,
    user: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "This is a really insightful article. I appreciate the detailed analysis of the climate agreement's potential economic impact.",
    likes: 24,
    timestamp: "2 hours ago",
    replies: [
      {
        id: 101,
        user: {
          name: "Jamie Rodriguez",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content: "I agree! The part about job creation in renewable energy sectors was particularly interesting.",
        likes: 8,
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Sam Wilson",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "While I support the agreement's goals, I'm skeptical about whether countries will actually follow through on their commitments. We've seen similar promises broken before.",
    likes: 17,
    timestamp: "3 hours ago",
    replies: [],
  },
  {
    id: 3,
    user: {
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "The comparison between this agreement and previous climate accords was really helpful. It gives important context for understanding why this one might be more effective.",
    likes: 32,
    timestamp: "5 hours ago",
    replies: [
      {
        id: 102,
        user: {
          name: "Jordan Smith",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content: "Exactly! The enforcement mechanisms are much stronger this time around.",
        likes: 11,
        timestamp: "4 hours ago",
      },
      {
        id: 103,
        user: {
          name: "Casey Johnson",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content: "I'm still not convinced. Enforcement has always been the weak point of international agreements.",
        likes: 6,
        timestamp: "3 hours ago",
      },
    ],
  },
]

type Comment = {
  id: number
  user: {
    name: string
    avatar: string
  }
  content: string
  likes: number
  timestamp: string
  replies: ReplyType[]
}

type ReplyType = {
  id: number
  user: {
    name: string
    avatar: string
  }
  content: string
  likes: number
  timestamp: string
}

export function CommentSection() {
  // CommentSection({ articleId }: { articleId: number })
  const [comments, setComments] = useState<Comment[]>(sampleComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: newComment,
      likes: 0,
      timestamp: "Just now",
      replies: [],
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim()) return

    const reply: ReplyType = {
      id: Date.now(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: replyContent,
      likes: 0,
      timestamp: "Just now",
    }

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply],
        }
      }
      return comment
    })

    setComments(updatedComments)
    setReplyContent("")
    setReplyingTo(null)
  }

  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1,
        }
      }
      return comment
    })

    setComments(updatedComments)
  }

  const handleLikeReply = (commentId: number, replyId: number) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return {
              ...reply,
              likes: reply.likes + 1,
            }
          }
          return reply
        })

        return {
          ...comment,
          replies: updatedReplies,
        }
      }
      return comment
    })

    setComments(updatedComments)
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

      <div className="mb-8">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4 min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmitComment}>Post Comment</Button>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-6">
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium">{comment.user.name}</h4>
                  <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                </div>
                <p className="text-sm mb-2">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs"
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <Heart className="h-3 w-3 mr-1" />
                    {comment.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    <Reply className="h-3 w-3 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>

            {replyingTo === comment.id && (
              <div className="ml-14 mb-4">
                <Textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="mb-2 min-h-[80px]"
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                    Cancel
                  </Button>
                  <Button size="sm" onClick={() => handleSubmitReply(comment.id)}>
                    Reply
                  </Button>
                </div>
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="ml-14 mt-4 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex items-start gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                      <AvatarFallback>{reply.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{reply.user.name}</h4>
                        <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                      </div>
                      <p className="text-sm mb-2">{reply.content}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2 text-xs"
                        onClick={() => handleLikeReply(comment.id, reply.id)}
                      >
                        <Heart className="h-3 w-3 mr-1" />
                        {reply.likes}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

