'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'

type Review = {
  rating: number
  pseudo: string
  comment: string
  created_at: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function ModalAvis({ isOpen, onClose }: Props) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const LIMIT = 10

  async function loadMore(firstLoad = false) {
    if (loading) return
    setLoading(true)

    const res = await fetch(
      `/api/ratingv2-comp/paginated?offset=${firstLoad ? 0 : offset}&limit=${LIMIT}`,
    )
    const json = await res.json()

    if (firstLoad) {
      setReviews(json.items)
    } else {
      setReviews((prev) => [...prev, ...json.items])
    }

    setOffset((prev) => prev + LIMIT)
    setHasMore(json.hasMore)
    setLoading(false)
  }

  // Reset + première page
  useEffect(() => {
    if (isOpen) {
      setOffset(0)
      setReviews([])
      setHasMore(true)
      loadMore(true)
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" scrollBehavior="inside">
      <ModalContent>
        <ModalHeader className="text-lg font-semibold">
          Avis des utilisateurs
        </ModalHeader>

        <ModalBody className="space-y-4">
          {reviews.length === 0 && !loading && (
            <p className="text-center text-neutral-500">
              Aucun avis pour le moment…
            </p>
          )}

          {reviews.map((review, i) => (
            <div key={i} className="border-b pb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold">{review.pseudo}</span>
                <span className="text-yellow-500">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </span>
              </div>
              <p>{review.comment}</p>
              <p className="text-xs text-neutral-500 mt-1">
                {new Date(review.created_at).toLocaleDateString('fr-FR')}
              </p>
            </div>
          ))}

          {hasMore && (
            <div className="flex justify-center">
              <Button
                color="primary"
                variant="flat"
                onPress={() => loadMore()}
                isLoading={loading}
              >
                Voir plus
              </Button>
            </div>
          )}
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onPress={onClose}>
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
